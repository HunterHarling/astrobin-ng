import { async, TestBed } from "@angular/core/testing";
import { NotificationInterfaceGenerator } from "@features/notifications/generators/notification.interface.generator";
import { NotificationServiceMock } from "@features/notifications/services/notification.service-mock";
import { NotificationsApiService } from "@features/notifications/services/notifications-api.service";
import { NotificationsService } from "@features/notifications/services/notifications.service";
import { of } from "rxjs";

describe("NotificationsService", () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NotificationsApiService,
          useClass: NotificationServiceMock
        }
      ]
    });
    service = TestBed.inject(NotificationsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("refresh", () => {
    it("should call getAll and getUnreadCount", () => {
      jest.spyOn(service, "getAll");
      jest.spyOn(service, "getUnreadCount");

      service.refresh();

      expect(service.getAll).toHaveBeenCalled();
      expect(service.getUnreadCount).toHaveBeenCalled();
    });
  });

  describe("getUnreadCount", () => {
    it("should call the API", async(() => {
      jest.spyOn(service.api, "getUnreadCount").mockReturnValue(of(10));

      service.getUnreadCount().subscribe(value => {
        expect(value).toBe(10);
      });
    }));
  });

  describe("markAsRead", () => {
    it("should call the API", async(() => {
      const notification = NotificationInterfaceGenerator.notification();
      notification.read = false;

      service.markAsRead(notification).subscribe(value => {
        expect(notification.read).toBe(true);
        expect(service.api.update).toHaveBeenCalledWith(notification);
      });
    }));
  });

  describe("markAsUnRead", () => {
    it("should call the API", async(() => {
      const notification = NotificationInterfaceGenerator.notification();
      notification.read = true;

      service.markAsUnread(notification).subscribe(value => {
        expect(notification.read).toBe(false);
        expect(service.api.update).toHaveBeenCalledWith(notification);
      });
    }));
  });

  describe("markAllAsRead", () => {
    it("should call the API", async(() => {
      service.markAllAsRead().subscribe(value => {
        expect(service.api.markAllAsRead).toHaveBeenCalled();
      });
    }));
  });
});
