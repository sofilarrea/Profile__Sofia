<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars(trim($_POST['nombre']));
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $asunto = htmlspecialchars(trim($_POST['asunto']));
  $mensaje = htmlspecialchars(trim($_POST['mensaje']));

  $to = "sofialejandra.larrea@gmail.com"; // 🟡 Reemplazá esto por tu dirección real
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $cuerpo = "Nombre: $nombre\n";
  $cuerpo .= "Email: $email\n";
  $cuerpo .= "Asunto: $asunto\n\n";
  $cuerpo .= "Mensaje:\n$mensaje\n";

  if (mail($to, $asunto, $cuerpo, $headers)) {
    echo "<h2>Gracias, tu mensaje ha sido enviado correctamente.</h2>";
  } else {
    echo "<h2>Error al enviar el mensaje. Por favor intentá más tarde.</h2>";
  }
} else {
  echo "<h2>Acceso no válido.</h2>";
}
?>
