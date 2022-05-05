import { UniqueIdService } from './unique-id.service';

describe(`${UniqueIdService.name}`, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });
  describe(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}`, () => {
    it('should generate id when called with prefix', () => {
      const id = service.generateUniqueIdWithPrefix('any_prefix');
  
      expect(id.startsWith('any_prefix-')).toBeTrue();
    });

    it('should not generate duplicate ID when called multiples times', () => {
      const ids = new Set();
      for (let i = 0; i < 50; i++) {
        ids.add(service.generateUniqueIdWithPrefix('any_prefix'))
      }

      expect(ids.size).toBe(50);
    });

    it('should throw when called with empty', () => {
      expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
    });

    it('should throw when called with prefix null', () => {
      const invalidValues = [null, undefined, '']

      invalidValues.forEach(invalidValue => {
        expect(() => service.generateUniqueIdWithPrefix(invalidValue as string))
        .withContext(`Empty value '${invalidValue}'`)  
        .toThrow();
      })
    });

    it('should throw when called with prefix start with numbers', () => {
      const invalidValues = [0, 2, 3, 4, 5, 6, 7, 8 , 9,'0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

      invalidValues.forEach(invalidValue => {
        expect(() => service.generateUniqueIdWithPrefix(invalidValue as string))
        .withContext(`Invalid value '${invalidValue}'`)  
        .toThrow();
      })
    });

  })

  describe(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}`, () => {
    it('should return the number of generates IDs when called', () => {
      service.generateUniqueIdWithPrefix('any_prefix');
      service.generateUniqueIdWithPrefix('any_prefix');
  
      expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
    });
  })
});
