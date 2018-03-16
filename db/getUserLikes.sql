SELECT * FROM favs 
FULL OUTER JOIN products
ON favs.product_id = products.product_id
FULL OUTER JOIN shoes 
ON favs.shoe_id = shoes.shoe_id 
WHERE user_id = $1;

-- SELECT p.product_id, p.brand_name, p.product_description, p.image, s.shoe_id, s.brand_name, s.product_description, s.image FROM favs 
-- FULL OUTER JOIN shoes s
-- ON favs.shoe_id = s.shoe_id 
-- FULL OUTER JOIN products p
-- ON favs.product_id = p.product_id
-- WHERE user_id = $1;

