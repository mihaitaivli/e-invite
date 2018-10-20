const requiredEnvVars: String[] = ['PRISMA_SECRET', 'PRISMA_TOKEN']

requiredEnvVars.forEach((envVar: string) => {
  if (!process.env[`${envVar}`]) throw new Error(`Env var ${envVar} missing. Aborting...\n`)
});