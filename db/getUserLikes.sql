SELECT * FROM favs 
FULL OUTER JOIN products
ON favs.product_id = products.product_id 

FULL OUTER JOIN shoes 
ON favs.shoe_id = shoes.shoe_id 
WHERE user_id = $1