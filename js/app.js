$(function() {
   

      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })


    // search icon
    let searchIcon = $('.searchIcon')
    let bar = $('.bar')
    let cancel = $('.cross')
    let button = $('.btn')
    let sideBar = $('.sidebar')

    //  Side Bar 

    button.click(function() {
        sideBar.toggleClass('active')
    })




    // Search Bar 
    searchIcon.click(function() {
        bar.fadeIn(500)
    })

    cancel.click(function() {
        bar.fadeOut(500)
    })

})