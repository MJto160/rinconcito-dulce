-- Tabla de productos
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de testimonios
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  avatar_url TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Políticas para productos
CREATE POLICY "select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

-- Políticas para testimonios
CREATE POLICY "select_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (true);


-- Insertar productos iniciales
INSERT INTO products (name, description, price, category, image_url, featured) VALUES

('Pastel Tres Leches',
'Esponjoso bizcocho bañado en tres tipos de leche con crema batida y canela.',
356.42,
'Pasteles',
'https://images.pexels.com/photos/2915866/pexels-photo-2915866.jpeg?auto=compress&cs=tinysrgb&w=800',
true),

('Cupcakes Red Velvet',
'Suaves cupcakes de red velvet con glaseado de queso crema.',
27.13,
'Cupcakes',
'/images/cupcakes_red_velvet.jpg',
true),

('Galletas de Chocolate',
'Galletas crujientes con trozos de chocolate belga premium.',
17.44,
'Galletas',
'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
false),

('Tiramisú Clásico',
'Tradicional postre italiano con café espresso, mascarpone y cacao.',
100.67,
'Postres',
'/images/tiramisu_clasico.jpg',
true),

('Croissant de Almendra',
'Croissant francés relleno de crema de almendra y glaseado.',
36.81,
'Croissants',
'https://images.pexels.com/photos/2132646/pexels-photo-2132646.jpeg?auto=compress&cs=tinysrgb&w=800',
false),

('Pastel de Zanahoria',
'Húmedo pastel de zanahoria con nueces y glaseado de queso crema.',
298.38,
'Pasteles',
'/images/pastel_zanahoria.jpg',
false),

('Cheesecake de Frutos Rojos',
'Cremoso cheesecake con salsa de frutos rojos frescos.',
325.50,
'Pasteles',
'/images/cheesecake_frutos_rojos.jpg',
true),

('Macarons Surtidos',
'Doce macarons franceses en sabores variados y colores vibrantes.',
147.17,
'Galletas',
'https://images.pexels.com/photos/4509351/pexels-photo-4509351.jpeg?auto=compress&cs=tinysrgb&w=800',
true);


-- Insertar testimonios iniciales
INSERT INTO testimonials (name, avatar_url, rating, comment) VALUES

('María García',
'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
5,
'El pastel de bodas superó todas nuestras expectativas. No solo era hermoso, sino que el sabor era increíble. Todos nuestros invitados quedaron encantados.'),

('Carlos Rodríguez',
'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
5,
'Llevo años pidiendo sus cupcakes para cada cumpleaños familiar. La calidad nunca disminuye y siempre sorprenden con nuevos sabores.'),

('Ana Martínez',
'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
5,
'El tiramisú es el mejor que he probado fuera de Italia. La atención personalizada que recibí para mi evento fue excepcional.'),

('Roberto López',
'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
5,
'Los croissants de almendra son absolutamente adictivos. La textura perfecta y el sabor incomparable. Los pido cada semana.');