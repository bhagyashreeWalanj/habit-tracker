// import { z } from "zod";

// export const LoginFormValidation = z
//   .object({
//     name: z
//       .string()
//       .min(2, "Name must be at least 2 characters")
//       .max(50, "Name must be at most 50 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(8),
//   })
//   .superRefine(({ password }, checkPassComplexity) => {
//     const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
//     const containsLowercase = (ch: string) => /[a-z]/.test(ch);
//     const containsSpecialChar = (ch: string) =>
//       /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
//     let countOfUpperCase = 0,
//       countOfLowerCase = 0,
//       countOfNumbers = 0,
//       countOfSpecialChar = 0;
//     for (let i = 0; i < password.length; i++) {
//       let ch = password.charAt(i);
//       if (!isNaN(+ch)) countOfNumbers++;
//       else if (containsUppercase(ch)) countOfUpperCase++;
//       else if (containsLowercase(ch)) countOfLowerCase++;
//       else if (containsSpecialChar(ch)) countOfSpecialChar++;
//     }
//     if (
//       countOfLowerCase < 1 ||
//       countOfUpperCase < 1 ||
//       countOfSpecialChar < 1 ||
//       countOfNumbers < 1
//     ) {
//       checkPassComplexity.addIssue({
//         code: "custom",
//         message: "password does not meet complexity requirements",
//       });
//     }
//   });
