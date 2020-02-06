<div class="row">
    <div class="col-md-10 offset-md-1 text-center">
        <h2>Apply the cipher to Liber AL and other Class “A” texts</h2>
        <p>
            NAEQ<small>UERY</small> let's you apply your curious findings to nine Class "A" texts, including <em>The Book of the Law</em>.
            <br class="hidden-md-down"> Use the filter to compare multiple books side-by-side. Book verse numbers are visually included in your cipher results.</p>
    </div>
</div>

<div class="main-textarea-wrapper">
    <textarea class="form-control main-textarea" spellcheck="false" placeholder="Enter words, numbers, phrases or excerpts" maxlength="10000" rows="1"></textarea>

    <div class="naeq-number-value text-center">NAEQ<small>6</small> Value: <span>0</span></div>

    <div class="accordion" id="accordion-filter" role="tablist" aria-multiselectable="true">
        <div class="card subcard filter">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingFilterClassA">
                <a data-toggle="collapse" data-parent="#accordion-filter" href="#collapseFilterClassA" aria-expanded="false"
                aria-controls="collapseFilterClassA">
                    <h5 class="mb-0">
                        Filter by Class “A” Holy Books of Thelema <strong class="cipher-value"></strong>
                    </h5>
                </a>
            </div>

            <!-- Card body -->
            <div id="collapseFilterClassA" class="collapse" role="tabpanel" aria-labelledby="headingFilterClassA" data-parent="#accordion-filter">
                <div class="card-body">

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check1" data-book-number="i" <?php if(isset($_COOKIE['checkbox-i']) && $_COOKIE['checkbox-i'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check1">Liber I: The Book of the Magus (No. 1, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check2" data-book-number="vii" <?php if(isset($_COOKIE['checkbox-vii']) && $_COOKIE['checkbox-vii'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check2">Liber VII: The Book of Lapis Lazuli (No. 7, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check3" data-book-number="x" <?php if(isset($_COOKIE['checkbox-x']) && $_COOKIE['checkbox-x'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check3">Liber X: The Book of the Gate of Light (No. 10, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check4" data-book-number="xxvii" <?php if(isset($_COOKIE['checkbox-xxvii']) && $_COOKIE['checkbox-xxvii'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check4">Liber XXVII: The Book of the Trigrams&hellip; (No. 27, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" disabled checked="checked" id="Check5" data-book-number="xxxi">
                        <label class="custom-control-label" for="Check5"><strong>Liber XXXI: The Book of the Law (No. 31, Class A)</strong></label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check6" data-book-number="lxv" <?php if(isset($_COOKIE['checkbox-lxv']) && $_COOKIE['checkbox-lxv'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check6">Liber LXV: The Heart Girt with a Serpent (No. 65, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check7" data-book-number="lxvi" <?php if(isset($_COOKIE['checkbox-lxvi']) && $_COOKIE['checkbox-lxvi'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check7">Liber LXVI: The Book of the Ruby Star (No. 66, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check8" data-book-number="xc" <?php if(isset($_COOKIE['checkbox-xc']) && $_COOKIE['checkbox-xc'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check8">Liber XC: The Book of the Hermetic Fish-Hook (No. 90, Class A)</label>
                    </div> <!-- form-check.// -->

                    <div class="custom-control custom-checkbox">
                        <span class="float-right badge badge-light round">0</span>
                        <input type="checkbox" class="custom-control-input" id="Check9" data-book-number="clvi" <?php if(isset($_COOKIE['checkbox-clvi']) && $_COOKIE['checkbox-clvi'] == "true"){ ?> checked="checked" <?php } ?>>
                        <label class="custom-control-label" for="Check9">Liber CLVI: The Book of the Wall of Abiegnus (No. 156, Class A)</label>
                    </div> <!-- form-check.// -->

                </div> <!-- card-body.// -->
            </div>
            
        </div> <!-- card.// -->
    </div>

</div>

<?php

    $cookies = $_COOKIE;
    $activeBooks = 1;
    $columnCount = 1;
    foreach( $cookies as $key => $value ) {
        if( strpos($key, "checkbox-") !== false && $value == 'true' ) {
            ++$activeBooks;
        }
    }
    $columnCount = ($activeBooks == 1) ? 1 : (($activeBooks < 8) ? 2 : 3);

?>

<!--Accordion wrapper-->
<div class="accordion card-columns" data-columns="<?php print $columnCount; ?>" id="accordion-ciphers" role="tablist" aria-multiselectable="true">

    <?php include "books/liber-i.php"; ?>
    <?php include "books/liber-vii.php"; ?>
    <?php include "books/liber-x.php"; ?>
    <?php include "books/liber-xxvii.php"; ?>
    <?php include "books/liber-xxxi.php"; ?>
    <?php include "books/liber-lxv.php"; ?>
    <?php include "books/liber-lxvi.php"; ?>
    <?php include "books/liber-xc.php"; ?>
    <?php include "books/liber-clvi.php"; ?>
    
</div>
<!-- Accordion wrapper -->