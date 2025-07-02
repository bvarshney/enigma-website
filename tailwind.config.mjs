/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		screens: {
			'sDesktop': { 'max': '1520px' },
			'tablet': { 'max': '1024px' },
			'mobile': { 'max': '540px' }
		},
		extend: {
			backgroundSize: {
				'50%': '50%',
				'16': '4rem',
			},
			colors: {
				white: "var(--white)",
				white1: "var(--white1)",
				white2: "var(--white2)",
				white3: "var(--white3)",
				black: "var(--black)",
				black1: "var(--black1)",
				black2: "var(--black2)",
				black3: "var(--black3)",
				black4: "var(--black4)",
				primary: "var(--primary)",
				gray: "var(--gray)",
				gray1: "var(--gray1)",
				gray2: "var(--gray2)",
			},
			fontFamily: {
				heading: "var(--heading)",
				body: "var(--body)",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						transform: 'translateY(-100%)'
					},
					to: {
						transform: 'translateY(0%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.5s ease-out',
				'accordion-up': 'accordion-up 0.5s ease-out',
				'fade-in': 'fade-in 1s ease-out',
			},
			transitionDelay: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
		}
	},
	plugins: [],
};