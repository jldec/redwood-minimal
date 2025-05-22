import styles from "../styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log('Document RSC')
  return (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>RedwoodSDK minimal RSC Time</title>
      <link rel="stylesheet" href={styles} />
      <link rel="icon" href="/favicon.jpg" />
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
)};
