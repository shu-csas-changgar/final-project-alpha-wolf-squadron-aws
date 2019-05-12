start transaction;

insert into
country(country)
	values(
		"United States of America");

select * from country;
commit;

start transaction;

insert into
city(city, fk_country_id)
	values(
    "Toms River",
    (select country_id from country
		where country = "United States of America")
        );
        
insert into
	address(name, active, warranty_end_date, fk_lease_id, fk_vendor_id, fk_type_id)
		values("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("ThinkPad X1 Carben", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Galixcy Note 9", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
		("Apple Name of Desk Top", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?),
        ("RXL500 Monitor", 1, '2038-01-19 03:14:07', ?, ?, ?);
        
        
select * from city;
select * from address;

commit;


			