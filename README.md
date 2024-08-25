This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ALGUNOS COMENTARIOS

Hola chicos! Quería hacerles unos comentarios como indicado en las instrucciones de este test:

- Notarán que hay ciertos elementos (ej. en el Dashboard) que no tienen funcionalidad (botones, rutas). Los he colocado solamente para hacer una representación de lo que podría ser potencialmente un Dashboard más real.
- Dentro del formulario de creación de entidades, notarán que he agregado algunos campos más (para acercarme a algo más realista) y poder mostrar más información en la página del detalle de la entidad. Al no tener esos campos incluídos en el modelo del back, opté por guardar los datos en el localStorage. Entiendo que no sea una buena opción en proyectos grandes, y con información sensible abierta a todo el mundo. Pero nuevamente, quería acercarme un poco más a una potencial creación de entidades en la vida real, y es solamente una decisión como "mock".
- He agregado 3 gráficos al Dashboard: dos de ellos son creados con Chart.js, y uno con Tremor.so. Originalmente, había creado todos con datos ficticios y empleando Tremor.so, pero surge un warning de YAxis. Opté entonces por cambiar los gráficos a Chart.js, y dejar uno solo (el Gráfico de líneas o ArtChart) para que puedan ver mi manejo de ambas librerías.

Realmente, me divertí mucho con este desafío! Entiendo que lo que ofrezco es muy básico, pero espero con ansias poder cumplir con las funcionalidades y expectativas. Me encantaría poder formar parte de su equipo!

Muchas gracias!
