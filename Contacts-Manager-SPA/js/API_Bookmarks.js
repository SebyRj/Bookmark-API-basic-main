const API_URL = "https://kbg-labo-1-rick.glitch.me/api/bookmarks";

function API_GetBookMarks() {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL,
            success: bookmark => { resolve(bookmark); },
            error: (xhr) => { console.log(xhr); resolve(null); }
        });
    });
}
function API_GetBookMark(bookmarkId) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + bookmarkId,
            success: bookmark => { resolve(bookmark); },
            error: () => { resolve(null); }
        });
    });
}
function API_SaveBookmark(bookmark, create) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + (create ? "" : "/" + bookmark.Id),
            type: create ? "POST" : "PUT",
            contentType: 'application/json',
            data: JSON.stringify(bookmark),
            success: (/*data*/) => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}
function API_DeleteBookmark(id) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + id,
            type: "DELETE",
            success: () => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}