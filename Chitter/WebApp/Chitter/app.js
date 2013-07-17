$(function(chitter, $, undefined) {

    Pusher.log = function (msg) {
        if (console && console.log) {
            console.log(msg);
        }
    };

    var client = new WindowsAzure.MobileServiceClient('https://rtinsley-chitter.azure-mobile.net/', 'ujRHiuFyoYfUWEzKiamGlCLiohXjes91'),
        chitterTable = client.getTable('chitter');

    var pusher = new Pusher('7abc4e632230612b4143'),
        channel = pusher.subscribe('chit');

    channel.bind('insert', function(item) {
        var li = createItem(item);
        $('#chitter-items').append(li);
        updateItemsCount();
    });

    // Use a javascript templating library :-)
    chitter.init = function() {
        var query = client.getTable('chitter');

        query.read().then(function(todoItems) {
            var listItems = $.map(todoItems, createItem);

            $('#chitter-items').empty().append(listItems).toggle(listItems.length > 0);
            updateItemsCount();
        });
    };

    chitter.insert = function(item) {
        chitterTable.insert(item);
    };

    var createItem = function(item) {
        var li = $('<li>')
            .attr('data-chit-id', item.id)
            .append($('<span>').val(item.datecreated))
            .append($('<div>').append($('<input class="item-text">').val(item.message)));

        return li;
    };

    var updateItemsCount = function() {
        var count = $('#chitter-items li').size();
        $('#summary').html('<strong>' + count + '</strong> item(s)');
    };

}(window.chitter = window.chitter || {}, jQuery));

// Handle insert
$('#add-item').submit(function (evt) {
    var textbox = $('#new-item-text'),
        itemText = textbox.val();
    if (itemText !== '') {
        chitter.insert({ message: itemText, datecreated: new Date() });
    }
    textbox.val('').focus();
    evt.preventDefault();
});

// On initial load, start by fetching the current data
chitter.init();