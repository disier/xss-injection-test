console.log('Owned');

$('body').append('<!-- Button trigger modal -->' +
'<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">' +
'  Launch demo modal' +
'</button>' +
'' +
'<!-- Modal -->' +
'<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
'  <div class="modal-dialog modal-dialog-centered" role="document">' +
'    <div class="modal-content">' +
'      <div class="modal-header">' +
'        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>' +
'        <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
'          <span aria-hidden="true">&times;</span>' +
'        </button>' +
'      </div>' +
'      <div class="modal-body">' +
'        This is an <strong>owned page</strong>' +
'        <img sc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBdRXhpZgAASUkqAAgAAAABAA4BAgA7AAAAGgAAAAAAAABDdXRlIGthd2FpaSBhbGllbiBpbiBzcGFjZSBzaGlwIHZlY3RvciBjYXJ0b29uIGlsbHVzdHJhdGlvbv/hBVhodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTE2NDEwNDY3MSIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5p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">' +
'      </div>' +
'      <div class="modal-footer">' +
'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
'        <button type="button" class="btn btn-primary">Save changes</button>' +
'      </div>' +
'    </div>' +
'  </div>' +
'</div>');

