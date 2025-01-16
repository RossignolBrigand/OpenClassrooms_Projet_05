import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signupSchema = loginSchema.extend({
	confirmPassword: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.refine((val, ctx) => val === ctx.parent.password, {
			message: "Passwords must match",
		}),
});
