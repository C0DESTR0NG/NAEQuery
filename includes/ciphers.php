<div class="row">
    <div class="col-md-10 offset-md-1 text-center">
        <h2>Apply the cipher to Liber AL and other Class “A” texts</h2>
        <p>Did you find a unique df df df d ff, use the exclusive NAEQ<small>UERY</small> decipher tool to find matching cipher values. Find matching words, given contactee names or <em>noms de plume</em> by number</p>
    </div>
</div>

<textarea class="form-control main-textarea" placeholder="Insert a paragraph, phrase or excerpt" maxlength="10000" rows="5"></textarea>

<div class="accordion" id="accordion-filter" role="tablist" aria-multiselectable="true">
    <div class="card subcard filter">

        <!-- Card header -->
        <div class="card-header" role="tab" id="headingFilterClassA">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFilterClassA" aria-expanded="false"
            aria-controls="collapseFilterClassA">
                <h5 class="mb-0">
                    Filter by Class “A” Holy Books of Thelema <strong class="cipher-value"></strong>
                </h5>
            </a>
        </div>

        <!-- Card body -->
        <div id="collapseFilterClassA" class="collapse" role="tabpanel" aria-labelledby="headingFilterClassA" data-parent="#accordion">
            <div class="card-body">

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check1" data-book-number="i">
                    <label class="custom-control-label" for="Check1">Liber I: Liber B Vel Magi Sub Figurâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check2" data-book-number="vii">
                    <label class="custom-control-label" for="Check2">Liber VII: Liber Liberi Vel Lapidis Lazuli</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check3" data-book-number="x">
                    <label class="custom-control-label" for="Check3">Liber X: Liber Porta Lucis Sub Figureâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check4" data-book-number="xxvii">
                    <label class="custom-control-label" for="Check4">Liber XXVII: Liber Trigrammaton Sub Figurâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" disabled checked="checked" id="Check5" data-book-number="xxxi">
                    <label class="custom-control-label" for="Check5"><strong>Liber XXXI: Liber AL (Liber Legis), The Book of the Law</strong></label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check6" data-book-number="lxv">
                    <label class="custom-control-label" for="Check6">Liber LXV: Liber Cordis Cincti Serpente Sub Figurâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check7" data-book-number="lxvi">
                    <label class="custom-control-label" for="Check7">Liber LXVI: Liber Stellæ Rubeæ Sub Figurâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check8" data-book-number="xc">
                    <label class="custom-control-label" for="Check8">Liber XC: Liber Tzaddi Vel Hamus Hermeticus Sub Figurâ</label>
                </div> <!-- form-check.// -->

                <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">0</span>
                    <input type="checkbox" class="custom-control-input" id="Check9" data-book-number="clvi">
                    <label class="custom-control-label" for="Check9">Liber CLVI: Liber Cheth Vel Vallum Abiegni Sub Figurâ</label>
                </div> <!-- form-check.// -->

            </div> <!-- card-body.// -->
        </div>
        
    </div> <!-- card.// -->
</div>

<!--Accordion wrapper-->
<div class="accordion card-columns" data-columns="1" id="accordion-ciphers" role="tablist" aria-multiselectable="true">

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