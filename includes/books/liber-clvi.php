<!-- Accordion card -->
<div class="card filterable <?php if(isset($_COOKIE['checkbox-clvi']) && $_COOKIE['checkbox-clvi'] == "true"){ ?> active <?php } ?>">

    <!-- Card header -->
    <div class="card-header" role="tab" id="headingBookCLVI" data-book-number="clvi">
        <a data-toggle="collapse" data-parent="#headingBookCLVI" href="#collapseBookCLVI" aria-expanded="false"
        aria-controls="collapseBookCLVI">
            <h5 class="mb-0">
                <span href="#" title="Favorite books to activate on page reload">☆</span> Liber CLVI: The Book of the Wall of Abiegnus<strong class="cipher-value"></strong>
            </h5>
        </a>
    </div>

    <!-- Card body -->
    <div id="collapseBookCLVI" class="collapse" role="tabpanel" aria-labelledby="headingBookCLVI" data-parent="#headingBookCLVI">
        <div class="card-body"></div>
    </div>

</div>
<!-- Accordion card -->
