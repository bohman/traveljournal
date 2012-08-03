<?php if ($classes) {
  $classes = ' class="'. $classes . '"';
} ?>


<article<?php print $classes; ?><?php print $attributes; ?>>
  <?php if ($title) {
    print render($title_prefix);
      print $title;
    print render($title_suffix);
  }

  print $picture; // User picture if we have one
  print $author; // Author name
  print $created; // Published date
  print $changed; // Updated date
  print $permalink; // Permalink

  hide($content['links']);
  print render($content);

  if ($signature) {
    print $signature; // If we let people set signature in their profile
  }

  print render($content['links']); ?>
</article>