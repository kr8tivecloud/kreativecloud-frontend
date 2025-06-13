import { z, ZodError } from "zod";

const envSchema = z.object({
  // Email configuration
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.string(),
  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_FROM: z.string().email(),

  // Add other environment variables as needed
  NODE_ENV: z.enum(["development", "production", "test"]),
});

type AppConfig = z.infer<typeof envSchema>;

const setUpConfig = (): AppConfig => {
  try {
    const appConfig = envSchema.parse(process.env);

    return appConfig;
  } catch (error) {
    if (error instanceof ZodError) {
      error.errors.map((err) => {
        console.error(`${err.path} -> ${err.message}`);
      });
    }
    throw new Error("Environment variables not set up properly");
  }
};

const appConfig: AppConfig = setUpConfig();

export default appConfig;
