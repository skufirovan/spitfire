import DemoService from "@core/DemoService";
import DemoDto from "@domain/dtos/DemoDto";

export default class DemoController {
  static async create(
    accountId: bigint,
    name: string,
    text: string
  ): Promise<DemoDto> {
    try {
      const demo = await DemoService.create(accountId, name, text);
      const dto = new DemoDto(demo);

      return dto;
    } catch (error) {
      throw error;
    }
  }

  static async findByAccountId(accountId: bigint): Promise<DemoDto[] | null> {
    try {
      const demos = await DemoService.findByAccountId(accountId);

      if (!demos) return null;

      const dtos: DemoDto[] = demos.map((demo) => new DemoDto(demo));
      return dtos;
    } catch (error) {
      throw error;
    }
  }

  static async delete(accountId: bigint, name: string): Promise<DemoDto> {
    try {
      const demo = await DemoService.delete(accountId, name);
      const dto = new DemoDto(demo);

      return dto;
    } catch (error) {
      throw error;
    }
  }

  static async canRecord(
    accountId: bigint
  ): Promise<{ canRecord: boolean; remainingTimeText?: string }> {
    try {
      const { canRecord, remainingTimeText } = await DemoService.canRecord(
        accountId
      );

      if (!canRecord) {
        return { canRecord: false, remainingTimeText: remainingTimeText! };
      }

      return { canRecord: true };
    } catch (error) {
      throw error;
    }
  }
}
