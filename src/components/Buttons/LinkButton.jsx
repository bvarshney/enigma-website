import Image from "next/image";
import Link from "next/link"

const LinkButton = ({ btnText, className="", ...props }) => {
    return (
        <Link {...props} className={`group/link text-[1.2vw] font-medium font-heading tracking-wider flex items-center gap-[1vw] tablet:text-[3vw] mobile:text-[4vw] ${className}`}>
                <span className="relative after:block after:h-[2px] after:w-full after:bg-current group-hover/link:after:scale-x-0 after:transition-all after:duration-300">
                    {btnText}
                </span>
                <span className="group-hover/link:rotate-45 transition-transform duration-300 mb-[3px]">
                    <Image 
                        loading="lazy"
                        src="/assets/icons/arrow-right.png"
                        width={13}
                        height={13}
                        alt="arrow-right"
                    />
                </span>
        </Link>
    )
}

export default LinkButton;