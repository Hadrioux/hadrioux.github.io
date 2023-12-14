<script>
    document.querySelector('a').addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor = 'lightblue'; // Changez cette couleur selon vos besoins
      setTimeout(function() {
        window.location.href = event.target.href;
      }, 500); // Attendez la fin de l'animation avant de changer de page (ajustez si nécessaire)
    });
  </script>