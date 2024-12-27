import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import Router from "next/router";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Please enter your name",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    number: z
        .string()
        .min(10, { message: "Please enter a valid phone number" })
        .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers" }),
    message: z.string().min(5, {
        message: "Please enter a message with at least 5 characters",
    }),
})

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            number: "",
            message: "",
        },
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const formData = {
          name: data.name,
          email: data.email,
          number: data.number,
          message: data.message,
        };
    
        try {
          const res = await fetch("/api/contactFormSubmission", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          if (!res.ok) throw new Error("Failed to send message");
          form.reset();
          setIsSubmitting(false);
          setTimeout(() => {
            Router.push("/thank-you");
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] space-y-12">

                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Phone Number */}
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Phone Number*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Message*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <button type="submit" className="rounded-full bg-black1 w-[14vw] h-[4vw] text-white font-heading text-2xl uppercase flex items-center justify-center tablet:w-[24vw] tablet:h-[7vw] mobile:w-[36vw] mobile:h-[12vw] mobile:text-xl">
                    {isSubmitting ? (
                        <Loader2Icon className="animate-spin tablet:h-[4vw] tablet:w-[4vw] mobile:w-[6vw] mobile:h-[6vw]"/>
                    ) : (
                        <span>Submit</span>
                    )}
                </button>
            </form>
        </Form>
    )
}

export default ContactForm;
