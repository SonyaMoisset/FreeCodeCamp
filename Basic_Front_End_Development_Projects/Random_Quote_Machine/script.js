  $(document).ready(function() {
    $('#quoteBtn').on('click', function() {
      var quotes = [
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "People shouldn't be afraid of their government. Governments should be afraid of their people.",
        'img': 'http://images4.alphacoders.com/634/63444.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "Everybody is special. Everybody. Everybody is a hero, a lover, a fool, a villain. Everybody. Everybody has their story to tell.",
        'img': 'http://www.wallpaperup.com/uploads/wallpapers/2014/03/24/307595/big_thumb_f38ae29be31e4c280ad5e2e9ed9fc716.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "Remember, remember the fifth of November of gunpowder treason and plot. I know of no reason why the gun powder treason should ever be forgot.",
        'img': 'https://i.ytimg.com/vi/1S-J0PHx24g/maxresdefault.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "Love your rage, not your cage.",
        'img': 'http://stylishhdwallpapers.com/wp-content/uploads/2015/01/V-For-Vendetta-Desktop-HD-Wallpaper.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "It seems strange that my life should end in such a terrible place, but for three years I had roses, and apologized to no one.",
        'img': 'https://antiscribe.files.wordpress.com/2011/11/vs-dominoes-and-his-plot.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "There's no flesh or blood within this cloak to kill. There's only an idea. Ideas are bulletproof.",
        'img': 'http://wfiles.brothersoft.com/v/v_for_vendetta_hd_66099-1600x1200.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "Knowledge, like air, is vital to life. Like air, no one should be denied it.",
        'img': 'http://img1.goodfon.su/original/1920x1200/9/a2/v-znachit-vendetta-v-for.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "Happiness is the most insidious prison of all.",
        'img': 'http://wfiles.brothersoft.com/v/v_for_vendetta_hd_66095-1600x1200.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "I shall die here. Every last inch of me shall perish. Except one. An inch. It's small and it's fragile and it's the only thing in the world worth having. we must never lose it, or sell it, or give it away. We must never let them take it from us.",
        'img': 'https://i.ytimg.com/vi/uPuA7BX5L9g/maxresdefault.jpg'
      }, 
          {
        'author': '- Alan Moore, V for Vendetta',
        'quote': "The past can't hurt you anymore, not unless you let it.",
        'img': 'https://i.ytimg.com/vi/oIvusE5Vudc/maxresdefault.jpg'
      }
      ];

      var randomQuote = Math.floor((Math.random() * quotes.length));

      $('.quote').html(quotes[randomQuote]['quote']);
      $('.hero').html(quotes[randomQuote]['author']);
      $('.img-responsive').attr('src', quotes[randomQuote]['img']);

      $("#tweetBtn").on('click', function() {
        $("#tweetBtn").attr('href', "https://twitter.com/intent/tweet?text=" + quotes[randomQuote]['quote'] + quotes[randomQuote]['author']);
      });
    })
  });