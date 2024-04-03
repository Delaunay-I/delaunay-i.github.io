document.addEventListener('DOMContentLoaded', (event) => {
    const imagesToLoad = [
      'src/assets/menu.svg',
      'src/assets/web.png',
      'src/assets/creator.png',
      'src/assets/mobile.png',
      'src/assets/company/ansys.png',
      'src/assets/company/ubc.png',
      'srs/assets/company/imagecapgen_tf.webp',
      "src/assets/github.png",
      "src/assets/memories_project.webp",
      "src/assets/docs.png",
      "src/assets/email.png",
      "src/assets/linkedin.svg",
      "src/tech/c++.png"
    ];
  
    imagesToLoad.forEach((img) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = img;
      link.as = 'image';
      link.fetchpriority = 'high';
      document.head.appendChild(link);
    });
  });