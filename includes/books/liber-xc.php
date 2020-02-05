<!-- Accordion card -->
<div class="card filterable <?php if(isset($_COOKIE['checkbox-xc']) && $_COOKIE['checkbox-xc'] == "true"){ ?> active <?php } ?>">

    <!-- Card header -->
    <div class="card-header" role="tab" id="headingBookXC" data-book-number="xc">
        <a data-toggle="collapse" data-parent="#headingBookXC" href="#collapseBookXC" aria-expanded="false"
        aria-controls="collapseBookXC">
            <h5 class="mb-0">
                <span href="#" title="Favorite books to activate on page reload">☆</span> Liber XC: The Book of the Hermetic Fish-Hook<strong class="cipher-value"></strong>
            </h5>
        </a>
    </div>

    <!-- Card body -->
    <div id="collapseBookXC" class="collapse" role="tabpanel" aria-labelledby="headingBookXC" data-parent="#headingBookXC">
        <div class="card-body"></div>
    </div>

</div>
<!-- Accordion card -->
