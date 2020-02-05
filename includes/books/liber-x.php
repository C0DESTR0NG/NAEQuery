<!-- Accordion card -->
<div class="card filterable <?php if(isset($_COOKIE['checkbox-x']) && $_COOKIE['checkbox-x'] == "true"){ ?> active <?php } ?>">

    <!-- Card header -->
    <div class="card-header" role="tab" id="headingBookX" data-book-number="x">
        <a data-toggle="collapse" data-parent="#headingBookX" href="#collapseBookX" aria-expanded="false"
        aria-controls="collapseBookX">
            <h5 class="mb-0">
                <span href="#" title="Favorite books to activate on page reload">☆</span> Liber X: The Book of the Gate of Light<strong class="cipher-value"></strong>
            </h5>
        </a>
    </div>

    <!-- Card body -->
    <div id="collapseBookX" class="collapse" role="tabpanel" aria-labelledby="headingBookX" data-parent="#headingBookX">
        <div class="card-body"></div>
    </div>

</div>
<!-- Accordion card -->
