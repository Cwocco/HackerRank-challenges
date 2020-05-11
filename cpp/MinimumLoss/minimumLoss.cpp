int CCalcul::minimumLoss(QVector<int> values)
{
  int i = 0;
  int j = 0;
  int minimum_loss = 999999999;
  int tmp = 0;

  while (i < values.size() - 1)
    {
      j = i + 1;

      while (j < values.size())
        {
	  tmp = values.at(i) - values.at(j);
	  if (tmp > 0 && tmp < minimum_loss)
	    minimum_loss = tmp;
	  j++;
        }
      i++;
    }

  qDebug() << minimum_loss;
  return minimum_loss;
}
