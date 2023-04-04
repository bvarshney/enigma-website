import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default form;

function form() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    company: Yup.string().required("Company name is required"),
    mobile: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .required("Email Address is required")
      .email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  // Button
  useEffect(() => {
    let button = document.querySelector(".submit-button");
    let item = document.querySelector(".submit-button .round");

    button.addEventListener("mouseenter", function (event) {
      this.classList += " animate";

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }

      item.style.left = buttonX + "px";
      item.style.width = "1px";
      item.style.height = "1px";
    });

    button.addEventListener("mouseleave", function () {
      this.classList.remove("animate");

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
    });
  });

  return (
    <div className="card m-3 border-0">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-12">
              <input
                name="name"
                type="text"
                placeholder="Name*"
                {...register("name")}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div className="form-group col-12">
              <input
                name="company"
                type="text"
                placeholder="Company Name*"
                {...register("company")}
                className={`form-control ${errors.company ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.company?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <input
                name="mobile"
                maxLength={10}
                type="tel"
                placeholder="Phone Number*"
                {...register("mobile")}
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.mobile?.message}</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <input
                name="email"
                type="text"
                placeholder="Email Address*"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button mr-1"
              data-cursor-text="Hi!"
              data-cursor-size="80px"
              data-cursor-color="#1a1a1a"
            >
              Enquire
              <span className="round" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
