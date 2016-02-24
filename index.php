<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="app.js"></script>
    <style>
    <?php

        $x = range(0, 320, 80); # [0, 40, 80..360]
        $y = range(0, 320, 80);

        // Create a scrambled grid
        $grid = array();

        foreach ($y as $y_index => $yval) {
            foreach ($x as $x_index => $xval) {
                $grid[] = array($xval, $yval);
            }
        }

        shuffle($grid);

        foreach ($y as $y_index => $yval) {
                foreach ($x as $x_index => $xval) {
                    $random_coords = current($grid);

                    $css = ".x-$xval-y-$yval {";
                    $css .= "background-position: -{$random_coords[0]}px -{$random_coords[1]}px;";
                    $css .= "left: {$xval}px;";
                    $css .= "top: {$yval}px;";
                    $css .= "}";
                    echo $css;

                    next($grid);
            }
        }
    ?>
    </style>
</head>
<body>
<div class="container">
    <?php

    foreach ($grid as $index => $coords)
    {

    }
    foreach ($y as $y_index => $yval) {
        foreach ($x as $x_index => $xval) {
            if ($yval == end($y) && $xval == end($x))
            {
                $html = "<div class='tile empty'>";
            }
            else
            {
                $html = "<div class='tile x-$xval-y-$yval'>";
                $html .= "$xval, $yval";
                $html .= "</div>";
            }

            echo $html;
        }
    }
    ?>
</div>
</body>
</html>