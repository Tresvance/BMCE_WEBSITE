import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { Image, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.css';

const galleryData = [
  {
    id: 'foundation-2014',
    title: 'Foundation 2014',
    thumbnail: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg',
    images: [
      'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg',
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    ]
  },
  {
    id: 'cultural-day-2023',
    title: 'Cultural Day 2023',
    thumbnail: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
    images: [
      'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
      'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg',
      'https://images.pexels.com/photos/2306278/pexels-photo-2306278.jpeg',
    ]
  },
  {
    id: 'sports-2023',
    title: 'Sports Day 2023',
    thumbnail: 'https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg',
    images: [
      'https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg',
      'https://images.pexels.com/photos/8220094/pexels-photo-8220094.jpeg',
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    ]
  },
];

const Gallery: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<typeof galleryData[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="gallery-container">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="gallery-header"
      >
        <h1>College Photo & Video Gallery</h1>
    
      </motion.header>

      <motion.div
        ref={ref}
        className="gallery-grid"
      >
        {galleryData.map((gallery, index) => (
          <motion.div
            key={gallery.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="gallery-card"
            onClick={() => setSelectedGallery(gallery)}
          >
            <div className="gallery-card-image">
              <img src={gallery.thumbnail} alt={gallery.title} />
              <div className="gallery-card-overlay" />
            </div>
            <div className="gallery-card-content">
              <h3 className="gallery-card-title">{gallery.title}</h3>
              <button className="gallery-card-button">
                <Image size={18} />
                View Gallery
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedGallery.title}</h2>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="modal-close"
                >
                  ✕
                </button>
              </div>

              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
              >
                {selectedGallery.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${selectedGallery.title} - Image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev">
                  <ChevronLeft size={24} />
                </div>
                <div className="swiper-button-next">
                  <ChevronRight size={24} />
                </div>
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;