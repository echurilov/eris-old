# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all
Membership.delete_all

zeus = User.create({"username"=>"Zeus", "email"=>"zeus@pantheon.io", "password"=>"ganymede"})
athena = User.create({"username"=>"Athena", "email"=>"athena@pantheon.io", "password"=>"pallas"})
hermes = User.create({"username"=>"Hermes", "email"=>"hermes@pantheon.io", "password"=>"caduceus"})
artemis = User.create({"username"=>"Artemis", "email"=>"artemis@pantheon.io", "password"=>"bowandarrow"})
apollo = User.create({"username"=>"Apollo", "email"=>"apollo@pantheon.io", "password"=>"chariot"})
hades = User.create({"username"=>"Hades", "email"=>"hades@pantheon.io", "password"=>"cerberus"})
persephone = User.create({"username"=>"Persephone", "email"=>"persephone@pantheon.io", "password"=>"sixseeds"})
poseidon = User.create({"username"=>"Poseidon", "email"=>"poseidon@pantheon.io", "password"=>"stormyseas"})
chronos = User.create({"username"=>"Chronos", "email"=>"chronos@pantheon.io", "password"=>"ticktock"})


pantheon = Server.create("name" => "Pantheon", "owner_id" => chronos.id)
  Membership.create("member_id" => chronos.id, "server_id" => pantheon.id)
  Membership.create("member_id" => zeus.id, "server_id" => pantheon.id)
  Membership.create("member_id" => poseidon.id, "server_id" => pantheon.id)
  Membership.create("member_id" => hades.id, "server_id" => pantheon.id)
  Membership.create("member_id" => athena.id, "server_id" => pantheon.id)
  Membership.create("member_id" => artemis.id, "server_id" => pantheon.id)
  Membership.create("member_id" => apollo.id, "server_id" => pantheon.id)
  Membership.create("member_id" => hermes.id, "server_id" => pantheon.id)
  Membership.create("member_id" => persephone.id, "server_id" => pantheon.id)

olympus = Server.create("name" => "Olympus", "owner_id" => zeus.id)
  Membership.create("member_id" => zeus.id, "server_id" => olympus.id)
  Membership.create("member_id" => hades.id, "server_id" => pantheon.id)
  Membership.create("member_id" => poseidon.id, "server_id" => pantheon.id)

athens = Server.create("name" => "Athens", "owner_id" => athena.id)
  Membership.create("member_id" => athena.id, "server_id" => athens.id)
  Membership.create("member_id" => artemis.id, "server_id" => pantheon.id)
  Membership.create("member_id" => apollo.id, "server_id" => pantheon.id)
  Membership.create("member_id" => hermes.id, "server_id" => pantheon.id)
  Membership.create("member_id" => persephone.id, "server_id" => pantheon.id)
