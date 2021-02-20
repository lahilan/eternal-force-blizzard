FROM browserless/chrome:latest
ENV FUNCTION_ENABLE_INCOGNITO_MODE=true KEEP_ALIVE=true PREBOOT_CHROME=true
COPY eternal-force-blizzard.js /app/
