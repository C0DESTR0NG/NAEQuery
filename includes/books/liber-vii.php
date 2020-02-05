<!-- Accordion card -->
<div class="card filterable <?php if(isset($_COOKIE['checkbox-vii']) && $_COOKIE['checkbox-vii'] == "true"){ ?> active <?php } ?>">

    <!-- Card header -->
    <div class="card-header" role="tab" id="headingBookVII" data-book-number="vii">
        <a data-toggle="collapse" data-parent="#headingBookVII" href="#collapseBookVII" aria-expanded="false"
        aria-controls="collapseBookVII">
            <h5 class="mb-0">
                <span href="#" title="Favorite books to activate on page reload">☆</span> Liber VII: The Book of Lapis Lazuli<strong class="cipher-value"></strong>
            </h5>
        </a>
    </div>

    <!-- Card body -->
    <div id="collapseBookVII" class="collapse" role="tabpanel" aria-labelledby="headingBookVII" data-parent="#headingBookVII">
        <div class="card-body"></div>
    </div>

</div>
<!-- Accordion card -->
