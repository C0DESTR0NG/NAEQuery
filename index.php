<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>NAEQuery JS Cipher</title>
        <meta name="description" content="NAEQuery is a lightweight algorithm that helps highlight significant words or noms de plume within paragraphs, phrases or excerpts. The algorithm sums up the New Aeon English Qabala cipher equivalent letter values for each consecutive set of words. The result set outputs an array of word combinations and their summed NAEQ cipher values.">
        <meta name="keywords" content="NAEQ,New Aeon English Qabala,cipher,secret cipher,hellier,wriste,112,indrid cold"> 
        <meta name="viewport" content="width=device-width,initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/styles.css">

        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
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
        
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <noscript>JavaScript is required</noscript>
                    
                    <h1 class="text-center">NAEQ<small>uery</small></h1>
                    <p class="text-center"><em>“In the labyrinth of the alphabet<br class="hidden-md-up"> the truth is hidden.”<br><small>- Austin Osman Spare</small></em></p>
                    
                    <p>NAEQ<small>uery</small> is a lightweight algorithm that helps highlight significant words or <em>noms de plume</em> within paragraphs, phrases or excerpts. The algorithm sums up the New Aeon English Qabala cipher equivalent letter values for each consecutive set of words. The result set outputs an array of word combinations and their summed NAEQ cipher values.</p>
                    <p>The algorithm highlights all words or phrases that equal <strong>your inputted cipher value</strong>.</p>
                            
                    <div class="form-group">
                        <label for="naeq-label"></label>
                        <div class="row">
                            <div class="col-md-6">
                                <input type="number" class="form-control naeq-input" placeholder="Enter a cipher number value (ie: 112)" pattern="\d*" min="0" onkeypress="return event.charCode != 45">
                            </div>
                            <div class="col-md-6">
                                <label class="error">You must enter a cipher number value</label>
                            </div>
                        </div>
                        <textarea class="form-control naeq-textarea" placeholder="Insert a paragraph, phrase or excerpt" maxlength="10000" rows="8"></textarea>
                        <div class="row text-right">
                            <div class="col-md-12">
                                <span class="text-counter">10000 character(s) left</span>
                            </div>
                        </div>
                        
                        <button type="button" class="naeq-analyze btn btn-primary">Analyze text</button>

                        <div class="row">
                            <div class="col-md-12 cloud-wrapper">
                                
                            </div>
                        </div>

                        <!--Accordion wrapper-->
                        <div class="accordion md-accordion" id="accordion" role="tablist" aria-multiselectable="true">

                            <!-- Accordion card -->
                            <div class="card">
                        
                                <!-- Card header -->
                                <div class="card-header" role="tab" id="headingOne1">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne1" aria-expanded="false"
                                    aria-controls="collapseOne1">
                                        <h5 class="mb-0">
                                            Matches for cipher value: <strong class="cipher-value"></strong>
                                        </h5>
                                    </a>
                                </div>
                            
                                <!-- Card body -->
                                <div id="collapseOne1" class="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                    <div class="card-body">
                                        No matches.
                                    </div>
                                </div>
                        
                            </div>
                            <!-- Accordion card -->
                        
                            <!-- Accordion card -->
                            <div class="card">
                        
                                <!-- Card header -->
                                <div class="card-header" role="tab" id="headingTwo2">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo2"
                                    aria-expanded="false" aria-controls="collapseTwo2">
                                        <h5 class="mb-0">
                                                For the nerds <small><strong>﹝﹞</strong></small>
                                        </h5>
                                    </a>
                                </div>
                            
                                <!-- Card body -->
                                <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                                    <div class="card-body">
                                            <pre id="json">[

    ]
                                            </pre>
                                    </div>
                                </div>
                        
                            </div>
                            <!-- Accordion card -->
                        
                        </div>
                        <!-- Accordion wrapper -->

                        <p class="example-text">See 112 Example:</p>

                        <blockquote>
                            <p><q>112 = WE ARE ONE, the code phrase that tells you you’re in important territory, but also THY WIFE and LETTER and WORDS AND SIGNS and INK AND BLACK and ALL HOUSE OF GOD and THE WHEEL and I AM 49 PLACE and, as you noted CROSS 52 I FLAP.</q></p>
                            <footer>"Interview with Terry R. Wriste June 24, 1994.” Interview by Allen H. Greenfield. Secret Cipher of the UFOnauts</footer>

                            <p><strong>MATCHES: WE ARE ONE, THY WIFE, LETTER, WORDS AND SIGNS, INK AND BLACK, ALL HOUSE OF GOD, THE WHEEL, I AM PLACE, CROSS I FLAP</strong></p>
                        </blockquote>

                        <div class="social-button tw">
                            <a href="https://twitter.com/cmilburndesign?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @cmilburndesign</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                        <div class="social-button">
                            <a class="github-button" href="https://github.com/C0DESTR0NG" data-size="large" aria-label="Follow @C0DESTR0NG on GitHub">Follow @C0DESTR0NG</a>
                        </div>
                        <div class="social-button">
                            <a class="github-button" href="https://github.com/C0DESTR0NG/NAEQuery/archive/master.zip" data-icon="octicon-cloud-download" data-size="large" aria-label="Download C0DESTR0NG/NAEQuery on GitHub">Download</a>
                        </div>

                    </div>

                    <footer>
                        <p class="copyright">CODE<strong>STRONG</strong> • <?php print date('Y'); ?></p>
                    </footer>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
        
    </body>
</html>