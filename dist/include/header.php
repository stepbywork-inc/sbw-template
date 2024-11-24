<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    if (window.outerWidth < 375) {
      document.querySelector("meta[name='viewport']").setAttribute("content", 'width=375px');
    }
  </script>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $TITLE; ?></title>
  <meta name="description" content="<?php echo $DESC; ?>">
  <link rel="icon" type="image/png" href="<?php echo $PATH; ?>assets/favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="<?php echo $PATH; ?>assets/favicon/favicon.svg" />
  <link rel="shortcut icon" href="<?php echo $PATH; ?>assets/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $PATH; ?>assets/favicon/apple-touch-icon.png" />
  <meta name="format-detection" content="telephone=no">
  <script src="<?php echo $PATH; ?>assets/plugins/jquery.min.js"></script>
  <script src="<?php echo $PATH; ?>assets/plugins/swiper-bundle.min.js"></script>
  <script src="<?php echo $PATH; ?>assets/plugins/aos.js"></script>
  <script src="<?php echo $PATH; ?>assets/js/main.js"></script>
  <link rel="stylesheet" href="<?php echo $PATH; ?>assets/plugins/swiper-bundle.min.css" />
  <link rel="stylesheet" href="<?php echo $PATH; ?>assets/plugins/aos.css" />
  <link rel="stylesheet" href="<?php echo $PATH; ?>assets/css/style.css">
  <?php echo $ADD_HEADER; ?>
</head>

<body>