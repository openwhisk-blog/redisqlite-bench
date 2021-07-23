# actions
nim auth current
nim project deploy .

# bench

source ./sql.src
echo ">>> 100 inserts into one field table"
nim action invoke db/bench1 -p size 100
query "select count(*) from bench1"
echo ">>> 500 inserts int one field table"
nim action invoke db/bench1 -p size 500
query "select count(*) from bench1"

echo ">>> 100 inserts into three fields table"
nim action invoke db/bench2 -p size 100
query "select count(*) from bench1"

echo ">>> 500 inserts into three fields table"
nim action invoke db/bench2 -p size 500
query "select count(*) from bench2"

