$('document').ready(function() {
$('.modal_container').append(`
<div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="projectModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <!-- to add slider for gallery -->
      <div id="indicatorOfCarousel" class="carousel slide" data-ride="carousel">
		  <ol class="carousel-indicators">
		    <li data-target="#indicatorOfCarousel" data-slide-to="0" class="active"></li>
		    <li data-target="#indicatorOfCarousel" data-slide-to="1"></li>
		    <li data-target="#indicatorOfCarousel" data-slide-to="2"></li>
		  </ol>
		  <div class="carousel-inner">

		    <!-- each element of gallery -->
		    <div class="carousel-item active">
		      <img class="d-block w-100" src="./1.png" alt="First slide">
		    </div>
		    <!-- end element of gallery -->

		    <div class="carousel-item">
		      <img class="d-block w-100" src="./2.png" alt="Second slide">
		    </div>
		    <div class="carousel-item">
		      <img class="d-block w-100" src="./3.png" alt="Third slide">
		    </div>
		  </div>
		  <a class="carousel-control-prev" href="#indicatorOfCarousel" role="button" data-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="carousel-control-next" href="#indicatorOfCarousel" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>
      <!-- end of slider for gallery -->

      <!-- to add a comment -->
        <form>
          <div class="form-group">
            <label for="visitor-name" class="col-form-label">Visitor Name:</label>
            <input type="text" class="form-control" id="visitor-name">
          </div>
          <div class="form-group">
            <label for="comment-text" class="col-form-label">Comment:</label>
            <textarea class="form-control" id="comment-text"></textarea>
          </div>
        </form>
      <!-- to add a comment -->

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick="addComment">Add Comment</button>
      </div>
    </div>
  </div>
</div>
	`)
	
})