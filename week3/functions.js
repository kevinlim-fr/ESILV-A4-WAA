$(function() {
    //iterate the array
    $.each(words,
        function() {
            var searchWord = this.word;
            var link = this.link;
            $('body:contains("' + searchWord + '")').each(function() {
                var newHtml = $(this).html().replace(searchWord, 
                    '<a class="wikilink" title="here is a link to Wikipedia" href="'+link+'">' + searchWord + '</a>');
                $(this).html(newHtml);
            });
        }
    );
});