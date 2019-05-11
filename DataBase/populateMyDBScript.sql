start transaction;

insert into
country(country)
	values
		("United States of America"),
		("Canada");

select * from country;
commit;

start transaction;

insert into
city(city, fk_country_id)
	values
		(
		"Toms River",
		(select country_id from country
			where country = "United States of America")
		),
		(
		"Middlesex",
		(select country_id from country
			where country = "United States of America")
		),
        (
		"Point Plesant",
		(select country_id from country
			where country = "United States of America")
		),
         (
		"Cleaveland",
		(select country_id from country
			where country = "United States of America")
		),
         (
		"Toronto",
		(select country_id from country
			where country = "Canada")
		);
select * from city;

Update city
	Set city = "Point Pleasant"
    where city_id = 3;
Update city
	Set city = "Cleveland"
    where city_id = 4;

commit;

start transaction;
        
insert into
	address(address, district, postal_code, fk_city_id)
		values
			(
			"1236 Steeplechase Ct",
			"New Jersey",
			"08755",
			(select city_id from city
				where city = "Toms River")
			),
            (
			"8 Myers Place",
			"New Jersey",
			"08846",
			(select city_id from city
				where city = "Middlesex")
			),
            (
			"45 Best Database Ever St",
			"Ohio",
			"08355",
			(select city_id from city
				where city = "Cleveland")
			),
            (
			"12 HelloWorld Ave",
			"Ontario",
			"08433",
			(select city_id from city
				where city = "Toronto")
			),
            (
			"15 Lakewood ave",
			"New Jersey",
			"03456",
			(select city_id from city
				where city = "Point Pleasant")
			);
            
select * from address;
Rollback;
commit;

start transaction;
insert into
	office (office, phone_number, equipment_contact, fk_address_id)
    values
		("HQ", "7325634555", "7325467689", 13),
        ("NJ", "4564448900", "4565467432", 15);
select * from office
rollback;
commit;

start transaction;
insert into
	room(room, floor, fk_office_id)
    values
		("101", 1, 3),
        ("102", 1, 3),
        ("103", 1, 3),
        ("104", 1, 3),
        ("105", 1, 3),
        ("106", 1, 3),
        ("201", 2, 3),
        ("202", 2, 3),
        ("203", 2, 3),
        ("204", 2, 3),
        ("205", 2, 3),
        ("301", 3, 3),
        ("302", 3, 3),
        ("302", 3, 3),
        ("304", 3, 3),
        ("101", 1, 4),
        ("102", 1, 4),
        ("103", 1, 4),
        ("104", 1, 4),
        ("105", 1, 4),
        ("106", 1, 4),
        ("201", 2, 4),
        ("202", 2, 4),
        ("203", 2, 4),
        ("204", 2, 4),
        ("205", 2, 4),
        ("301", 3, 4),
        ("302", 3, 4),
        ("302", 3, 4),
        ("304", 3, 4);
select * from room	
commit;

start transaction;
insert into
	employee(first_name, last_name, phone_number, work_phone_number, email, username, password, active, fk_address_id, fk_room_id)
		values
			("Alec", "Goncalves", "9737389999", "7324566790", "alec@gmail.com", "alec235", "winning", 1, 12, 16),
			("Alex", "Weeks", "5490768900", "7890898098", "alex@gmail.com", "megacow", "cows4life", 1, 11, 17),
			("Garrett", "Denton", "4567896576", "3457843434", "garrett@gmail.com", "Dr.Gvo", "overwatch", 1, 14, 1),
			("Jharenson", "Calderon", "4567890876", "3456754567", "Jherry@gmail.com", "JhareBear", "AlecRules", 1, 14, 2);
select * from employee;
commit;

insert into
	type(type)
		values
			("Desktop Computer"),
            ("Laptop"),
            ("Server"),
            ("Printer"),
            ("Mobile Device"),
            ("Display"),
            ("Smartboard"),
            ("camera"),
            ("recorders");
select * from type;
update type
	set type = "Camera" where type_id = 8;
update type
	set type = "Recorder" where type_id = 9;

insert into
	address(address, district, postal_code, fk_city_id)
		values
			(
			"132 elec st",
			"New Jersey",
			"08846",
			(select city_id from city
				where city = "Middlesex")
			),
            (
			"9 rose st",
			"New Jersey",
			"08846",
			(select city_id from city
				where city = "Middlesex")
			),
            (
			"Able dr",
			"Ohio",
			"08355",
			(select city_id from city
				where city = "Cleveland")
			),
            (
			"12 Nets Ave",
			"Ontario",
			"08433",
			(select city_id from city
				where city = "Toronto")
			),
            (
			"1 North Blvd",
			"New Jersey",
			"03456",
			(select city_id from city
				where city = "Point Pleasant")
			);
	Select * from address;
    
insert into 
	vendor(name, phone, email, fk_address_id)
		values("Apple", "7659087656", "apple@gmail.com", 16),
			  ("Samsung", "6574384883", "samsung@gmail.com", 17),
              ("Acer", "4324324322", "acer@gmail.com", 18),
              ("Lenova", "438998899", "lenova@gmail.com", 19),
              ("Google", "1987867890", "google@gmail.com", 20);
	select * from vendor;
    select * from type;
	select * from employee;
    
   insert into lease(lease_id, start_date, end_date)
    values(1, '2018-5-10 03:14:07','2025-01-19 03:14:07'),
			(2, '2018-5-10 03:14:07','2022-05-19 03:14:07');
	select * from lease;
    
    
    insert into
		equipment(name, active, warranty_end_date, fk_lease_id, fk_vendor_id, fk_type_id)
			values
            ("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
            ("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
            ("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
            ("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
			("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
            ("ThinkPad X1 Carben", 1, '2024-01-19 03:14:07', null ,4 , 2),
			("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
            ("Apple Name of Desk Top", 1, '2024-01-19 03:14:07', 1, 1, 1),
			("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
            ("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
            ("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
            ("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
            ("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
            ("Galixcy Note 9", 1, '2024-01-19 03:14:07', null, 2, 5),
			("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6),
            ("RXL500 Monitor", 1, '2024-01-19 03:14:07', 2, 3, 6);
	
    select * from equipment;
    select * from employee;
    
insert into inventory(fk_equipment_id, fk_employee_id, fk_room_id)
	values
		(42, 1, null),
        (43, 2, null),
        (44, 3, null),
        (45, null, 5),
        (46, null, 25),
        (47, 4, null),
        (48, 1, null),
        (49, 2, null),
        (50, 3, null),
        (51, 4, null),
        (52, null, 5),
        (53, null, 5),
        (54, null, 5),
        (55, null, 5),
        (56, null, 5),
        (57, null, 5),
        (58, null, 25),
        (59, null, 25),
        (60, null, 25),
		(61, null, 25),
        (62, 1, null),
        (63, 2, null),
        (64, 3, null),
        (65, 4, null),
        (66, null, 5),
        (67, null, 25),
        (68, 1, null),
        (69, 2, null),
        (70, 3, null),
        (71, 4, null),
        (72, null, 5),
        (73, null, 5),
        (74, null, 5),
        (75, null, 5),
        (76, null, 5),
        (78, null, 25),
        (79, null, 25),
        (80, null, 25),
        (81, null, 25),
        (82, null, 25);
        
ALTER TABLE `inventory` DROP INDEX `fk_employee_id_UNIQUE`;
select * from room;
select * from equipment;
show index from inventory;

select * from inventory;

select e.equipment_id, e.name, t.type, e.active, e.fk_lease_id, v.name, i.fk_employee_id, i.fk_room_id
from equipment as e
join type as t
		on e.fk_type_id = t.type_id
join vendor as v
		on v.vendor_id = e.fk_vendor_id
join inventory as i
		on i.fk_equipment_id = e.equipment_id;
	