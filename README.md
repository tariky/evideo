## Kako startovati projekat
Prisma se koristi za povezivanje baze podataka sa aplikacijom. Da bi napravili bazu podataka dovoljno je u komandnoj liniji upisati "npx prisma migrate dev"

Napraviti .env fajl kada klonirate projekat

Evo kako izgleda .env fajl
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB (Preview) and CockroachDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://DB_USERNAME:DB_PASSWORD@localhost:DB_PORT/evidio"
```

Koristena baza podataka je MySQL, sa tim da se moze migrirati na bilo koju drugu bazu podataka jer prisma ima adapetere