<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>NAEQuery Cipher Tool | CODESTRONG</title>
        <meta name="description" content="NAEQuery is a lightweight algorithm that helps highlight significant words or noms de plume within paragraphs, phrases or excerpts. The algorithm sums up the New Aeon English Qabala cipher equivalent letter values for each consecutive set of words. The result set outputs an array of word combinations and their summed NAEQ cipher values.">
        <meta name="keywords" content="NAEQ,New Aeon English Qabala,cipher,secret cipher,hellier,wriste,112,indrid cold"> 
        <meta name="viewport" content="width=device-width,initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Serif:400,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/highlighttextarea.min.css">
        <link rel="stylesheet" href="css/styles.css">

        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/highlighttextarea.min.js"></script>
        <script src="js/scripts.js"></script>

        <?php // Only inject Google Analytics if on non-local environment ?>
        <?php if( strpos($_SERVER['HTTP_HOST'], "naequery:8888") === false ) { ?>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-61289453-2"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-61289453-2');
        </script>
        <?php } ?>

        <link rel="stylesheet" href="css/jqcloud.min.css">
        <script src="js/jqcloud.min.js"></script>

        <script async defer src="https://buttons.github.io/buttons.js"></script>
    </head>
    <body>
        
        <div class="container main">
            <div class="row">
                <div class="col-md-12">

                    <noscript>JavaScript is required</noscript>
                    
                    <h1>
                        <a href="http://www.NAEQuery.com" title="NAEQuery by CODESTRONG">NAEQ<small>UERY</small></a>
                        <a href="javascript:void(0)" title="About NAEQuery" class="about-btn"><span></span></a>
                        <span>Version III</span>
                    </h1>

                    <div class="about">
                        <p>NAEQ<small>UERY</small> is a lightweight algorithm that helps highlight significant words, given contactee names or <em>noms de plume</em> within paragraphs, phrases or excerpts. The algorithm sums up the New Aeon English Qabala cipher equivalent letter values for each consecutive set of words. The result set outputs an array of word combinations and their summed NAEQ6 values.</p>
                        <p>The algorithm highlights all words or phrases that equal <strong>your inputted cipher value</strong>.</p>

                        <p>The publications of the A∴A∴ divide themselves into five classes.</p>
                        <ul class="has-header">
                            <li>Class “A” consists of books of which may be changed not so much as the style of a letter: that is, they represent the<br class="hidden-md-down"> utterance of an Adept entirely beyond the criticism of even the Visible Head of the Organization.</li>
                            <li>Class “B” consists of books or essays which are the result of ordinary scholarship, enlightened and earnest.</li>
                            <li>Class “C” consists of matter which is to be regarded rather as suggestive than anything else.</li>
                            <li>Class “D” consists of the Official Rituals and Instructions.</li>
                            <li>Class “E” consists of public announcements and broadsheets.</li>
                            <li>Some publications are composite, and pertain to more than one class.</li>
                            <li>O.T.O. documents are not assigned to any A∴A∴ class.</li>
                        </ul>
                    </div>
                            
                    <div class="form-group">

                        <?php include "includes/ciphers.php"; ?>
                        <?php include "includes/default-cipher.php"; ?>

                    </div>

                    <footer>
                        <p class="text-center quote"><em>“In the labyrinth of the alphabet<br class="hidden-md-up"> the truth is hidden.”<br><small>- Austin Osman Spare</small></em></p>
                    
                        <p class="copyright">CODE<strong>STRONG</strong> • <?php print date('Y'); ?></p>
                        <p class="version">
                            <small><a href="http://www.NAEQuery.com" title="NAEQuery Cipher Tool">NAEQ<small>UERY</small></a> Version III</small>
                        </p>

                        <div class="social-buttons">
                            <div class="social-button tw">
                                <a href="https://twitter.com/cmilburndesign?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @cmilburndesign</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                            <div class="social-button">
                                <a class="github-button" href="https://github.com/C0DESTR0NG" data-size="large" aria-label="Follow @C0DESTR0NG on GitHub">Follow @C0DESTR0NG</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        
    </body>
</html>