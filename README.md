# Redis SQLite benchmark

You need an account to Nimbella with running redisqlite

This is the current output of the test (time is in milliseconds):

```
>>> 100 inserts into one field table
{
  "count": 100,
  "time": 479
}
>>> MAP select count(*) from bench1
{
  "result": [
    {
      "count(*)": 100
    }
  ],
  "time": 626
}
>>> 500 inserts int one field table
{
  "count": 500,
  "time": 2368
}
>>> MAP select count(*) from bench1
{
  "result": [
    {
      "count(*)": 500
    }
  ],
  "time": 15
}
>>> 100 inserts into three fields table
{
  "count": 100,
  "time": 482
}
>>> MAP select count(*) from bench1
{
  "result": [
    {
      "count(*)": 500
    }
  ],
  "time": 14
}
>>> 500 inserts into three fields table
{
  "count": 500,
  "time": 2549
}
>>> MAP select count(*) from bench2
{
  "result": [
    {
      "count(*)": 500
    }
  ],
  "time": 18
}
```
