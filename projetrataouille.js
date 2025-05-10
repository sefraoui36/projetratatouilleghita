document.querySelectorAll('.list li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.list li').forEach(li => li.classList.remove('active'));
      item.classList.add('active');
    });
  });
  