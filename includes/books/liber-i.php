<!-- Accordion card -->
<div class="card filterable <?php if(isset($_COOKIE['checkbox-i']) && $_COOKIE['checkbox-i'] == "true"){ ?> active <?php } ?>">

    <!-- Card header -->
    <div class="card-header" role="tab" id="headingBookI" data-book-number="i">
        <a data-toggle="collapse" data-parent="#headingBookI" href="#collapseBookI" aria-expanded="false"
        aria-controls="collapseBookI">
            <h5 class="mb-0">
                <span href="#" title="Favorite books to activate on page reload">☆</span> Liber I: The Book of the Magus<strong class="cipher-value"></strong>
            </h5>
        </a>
    </div>

    <!-- Card body -->
    <div id="collapseBookI" class="collapse" role="tabpanel" aria-labelledby="headingBookI" data-parent="#headingBookI">
        <div class="card-body"></div>
    </div>

</div>
<!-- Accordion card -->
