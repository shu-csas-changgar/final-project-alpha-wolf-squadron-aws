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


select e.equipment_id, e.name, t.type, e.active, e.fk_lease_id, v.name, i.fk_employee_id, i.fk_room_id
from equipment as e
join type as t
		on e.fk_type_id = t.type_id
join vendor as v
		on v.vendor_id = e.fk_vendor_id
join inventory as i
		on i.fk_equipment_id = e.equipment_id;

INSERT INTO address (address, address2, district, postal_code, fk_city_id) VALUES('test', null, 'test', 'test', 3);
select * from address;
