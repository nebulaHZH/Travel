export interface teamCreate{
    capacity: BigInteger,
  coverUrl: string,
  iconUrl: string,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  teamName: string,
  userId: BigInteger
}
export class teamAdd{
    ruleForm:teamCreate={
        capacity:0,
    }
}
