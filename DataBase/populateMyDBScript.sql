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
	address(address, district, postal_code, fk_city_id)
		values(
			"1236 Steeplechase Ct",
            "New Jersey",
            "08755",
            (select city_id from city
				where city = "Toms River")
                );
select * from city;
select * from address;

commit;
			