/**
 * This file contain javascript code dinamically injected and executed on host page
 */
console.log("Code injected");


$('body').append(
    '<div class="modal" tabindex="-1" role="dialog"></div><div class="modal-dialog" role="document">  <div class="modal-content">    <div class="modal-header">      <h5 class="modal-title">Message</h5>      <button type="button" class="close" data-dismiss="modal" aria-label="Close">        <span aria-hidden="true">&times;</span>      </button>    </div>    <div class="modal-body">      <p>This modal window is raised by third party .JS file loaded outside CORS or CORB rules</p>    </div>    <div class="modal-footer">       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    </div>  </div></div></div>')


