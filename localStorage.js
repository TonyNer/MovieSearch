


function reply_click(clicked_id)
{
    //alert(clicked_id);
    const newLocal = 'movieset';
    sessionStorage.setItem(newLocal, JSON.stringify(clicked_id));
    var session = sessionStorage.getItem('movieset');
    console.log(session);
}
