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
Channel.delete_all

zeus = User.create({"username": "Zeus", "email": "zeus@pantheon.io", "password": "ganymede"})
zeus.home = Server.create("name": "Home", "owner_id": zeus.id)
Membership.create("member_id": zeus.id, "server_id": zeus.home.id)
Channel.create("name": "Persona", "server_id": zeus.home.id)
zeus.save

athena = User.create({"username": "Athena", "email": "athena@pantheon.io", "password": "pallas"})
athena.home = Server.create("name": "Home", "owner_id": athena.id)
Membership.create("member_id": athena.id, "server_id": athena.home.id)
Channel.create("name": "Persona", "server_id": athena.home.id)
athena.save

hermes = User.create({"username": "Hermes", "email": "hermes@pantheon.io", "password": "caduceus"})
hermes.home = Server.create("name": "Home", "owner_id": hermes.id)
Membership.create("member_id": hermes.id, "server_id": hermes.home.id)
hermes.save

artemis = User.create({"username": "Artemis", "email": "artemis@pantheon.io", "password": "bowandarrow"})
artemis.home = Server.create("name": "Home", "owner_id": artemis.id)
Membership.create("member_id": artemis.id, "server_id": artemis.home.id)
Channel.create("name": "Persona", "server_id": artemis.home.id)
artemis.save

apollo = User.create({"username": "Apollo", "email": "apollo@pantheon.io", "password": "chariot"})
apollo.home = Server.create("name": "Home", "owner_id": apollo.id)
Membership.create("member_id": apollo.id, "server_id": apollo.home.id)
Channel.create("name": "Persona", "server_id": apollo.home.id)
apollo.save

hades = User.create({"username": "Hades", "email": "hades@pantheon.io", "password": "cerberus"})
hades.home = Server.create("name": "Home", "owner_id": hades.id)
Membership.create("member_id": hades.id, "server_id": hades.home.id)
Channel.create("name": "Persona", "server_id": hades.home.id)
hades.save

persephone = User.create({"username": "Persephone", "email": "persephone@pantheon.io", "password": "sixseeds"})
persephone.home = Server.create("name": "Home", "owner_id": persephone.id)
Membership.create("member_id": persephone.id, "server_id": persephone.home.id)
Channel.create("name": "Persona", "server_id": persephone.home.id)
persephone.save

poseidon = User.create({"username": "Poseidon", "email": "poseidon@pantheon.io", "password": "stormyseas"})
poseidon.home = Server.create("name": "Home", "owner_id": poseidon.id)
Membership.create("member_id": poseidon.id, "server_id": poseidon.home.id)
Channel.create("name": "Persona", "server_id": poseidon.home.id)
poseidon.save

chronos = User.create({"username": "Chronos", "email": "chronos@pantheon.io", "password": "ticktock"})
chronos.home = Server.create("name": "Home", "owner_id": chronos.id)
Membership.create("member_id": chronos.id, "server_id": chronos.home.id)
Channel.create("name": "Persona", "server_id": chronos.home.id)
chronos.save

pantheon = Server.create("name": "Pantheon", "owner_id": chronos.id)
  Membership.create("member_id": chronos.id, "server_id": pantheon.id)
  Membership.create("member_id": zeus.id, "server_id": pantheon.id)
  Membership.create("member_id": poseidon.id, "server_id": pantheon.id)
  Membership.create("member_id": hades.id, "server_id": pantheon.id)
  Membership.create("member_id": athena.id, "server_id": pantheon.id)
  Membership.create("member_id": artemis.id, "server_id": pantheon.id)
  Membership.create("member_id": apollo.id, "server_id": pantheon.id)
  Membership.create("member_id": hermes.id, "server_id": pantheon.id)
  Membership.create("member_id": persephone.id, "server_id": pantheon.id)
  sky = Channel.create("name": "sky", "server_id": pantheon.id)
  sea = Channel.create("name": "sea", "server_id": pantheon.id)
  underworld = Channel.create("name": "underworld", "server_id": pantheon.id)

olympos = Server.create("name": "Olympos", "owner_id": zeus.id)
  Membership.create("member_id": zeus.id, "server_id": olympos.id)
  Membership.create("member_id": hades.id, "server_id": olympos.id)
  Membership.create("member_id": poseidon.id, "server_id": olympos.id)
  mytikas = Channel.create("name": "mytikas", "server_id": olympos.id)
  pieria = Channel.create("name": "pieria", "server_id": olympos.id)

athens = Server.create("name": "Athens", "owner_id": athena.id)
  Membership.create("member_id": athena.id, "server_id": athens.id)
  Membership.create("member_id": artemis.id, "server_id": athens.id)
  Membership.create("member_id": apollo.id, "server_id": athens.id)
  Membership.create("member_id": hermes.id, "server_id": athens.id)
  Membership.create("member_id": persephone.id, "server_id": athens.id)
  forum = Channel.create("name": "forum", "server_id": athens.id)
  acropolis = Channel.create("name": "acropolis", "server_id": athens.id)
  parthenon = Channel.create("name": "parthenon", "server_id": athens.id)
